import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Modal({ open, handleClose }) {
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    width: "100%",
    maxWidth: 420,
    height: "100%",
    maxHeight: 746,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e5e5e5",
            pb: 1,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "20px", color: "#000" }}>
            Shopping Cart
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflowY: "auto", mt: 2 }}>
          {/* Item 1 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img
                src="/modal_img.png"
                alt="Asgaard Sofa"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 500 }}>Asgaard sofa</Typography>
                <Typography sx={{ fontSize: 14 }}>
                  1 x <span style={{ color: "#B88E2F" }}>Rs. 250,000.00</span>
                </Typography>
              </Box>
            </Box>
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Item 2 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img
                src="/modal_img.png"
                alt="Casaliving Wood"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 500 }}>
                  Casaliving Wood
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  1 x <span style={{ color: "#B88E2F" }}>Rs. 270,000.00</span>
                </Typography>
              </Box>
            </Box>
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Subtotal */}
        <Typography sx={{ fontWeight: 500 }}>Subtotal</Typography>
        <Typography sx={{ fontWeight: 600, color: "#B88E2F" }}>
          Rs. 520,000.00
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e5e5",
            pt: 2,
            mt: 2,
          }}
        ></Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            gap: 1,
          }}
        >
          <button
            onClick={() => navigate("/cart")}
            className="border cursor-pointer border-black rounded-full px-4 py-2 text-sm"
          >
            Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="border cursor-pointer border-black rounded-full px-4 py-2 text-sm"
          >
            Checkout
          </button>
          <button
            onClick={() => navigate("/comparasion")}
            className="border cursor-pointer border-black rounded-full px-4 py-2 text-sm"
          >
            Comparison
          </button>
        </Box>
      </Box>
    </MuiModal>
  );
}

export default Modal;
