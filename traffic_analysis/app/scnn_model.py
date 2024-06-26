import torch
import torch.nn as nn
import cv2
import numpy as np

class SCNN(nn.Module):
    def __init__(self):
        super(SCNN, self).__init__()
        # Define SCNN layers
        self.backbone = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, kernel_size=3, stride=1, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2)
        )
        self.fc = nn.Sequential(
            nn.Linear(4500, 128),
            nn.ReLU(inplace=True),
            nn.Linear(128, 1)
        )

    def forward(self, x):
        x = self.backbone(x)
        x = x.view(x.size(0), -1)
        x = self.fc(x)
        return x

def load_scnn_model(model_path=''): #Enter the model path
    model = SCNN()
    state_dict = torch.load(model_path)
    model.load_state_dict(state_dict, strict=False)
    model.eval()
    return model

def scnn_lane_detection(frame, model):
    input_tensor = preprocess_frame_for_scnn(frame)
    with torch.no_grad():
        lane_predictions = model(input_tensor)
    lanes = postprocess_scnn_output(lane_predictions)
    return lanes

def preprocess_frame_for_scnn(frame):
    frame_resized = cv2.resize(frame, (800, 288))
    frame_normalized = frame_resized / 255.0
    frame_transposed = frame_normalized.transpose((2, 0, 1))
    input_tensor = torch.tensor(frame_transposed, dtype=torch.float32).unsqueeze(0)
    return input_tensor

def postprocess_scnn_output(output):
    output_np = output.squeeze().cpu().numpy()
    lanes = []  
    return lanes
