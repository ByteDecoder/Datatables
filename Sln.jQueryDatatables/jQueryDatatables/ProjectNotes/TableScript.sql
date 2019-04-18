/****** Object:  Table [dbo].[PersonalInfo]    Script Date: 4/19/2019 2:18:37 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PersonalInfo](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[DateOfBirth] [datetime2](7) NULL,
	[City] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[MobileNo] [nvarchar](max) NULL,
	[NID] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[CreatedDate] [datetime2](7) NULL,
	[LastModifiedDate] [datetime2](7) NULL,
	[CreationUser] [nvarchar](max) NULL,
	[LastUpdateUser] [nvarchar](max) NULL,
	[Status] [tinyint] NOT NULL,
 CONSTRAINT [PK_PersonalInfo] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

