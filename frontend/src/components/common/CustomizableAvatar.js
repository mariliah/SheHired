function CustomizableAvatar({
  avatarCustomClass,
  src,
  height,
  width,
  alt,
  avatarImage,
}) {
  return (
    <div className={avatarCustomClass}>
      <img
        src={src}
        height={height}
        width={width}
        alt={alt}
        className={`rounded-full border-2 border-cream ${avatarImage}`}
      />
    </div>
  );
}

export default CustomizableAvatar;
