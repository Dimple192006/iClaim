import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileClaim = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock claim submission
    const claimId = `CLM${Math.floor(100000 + Math.random() * 900000)}`;
    
    toast({
      title: "Claim Submitted Successfully!",
      description: `Your claim ${claimId} has been submitted and is being processed.`,
    });

    setTimeout(() => {
      navigate("/customer");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              File a New Claim
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Complete the form below to submit your insurance claim
            </p>
          </div>

          {/* Form Card */}
          <Card className="p-8 shadow-lg border border-yellow-200/40 dark:border-yellow-600/30 bg-white/90 dark:bg-gray-800/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Claim Type */}
              <div className="space-y-2">
                <Label htmlFor="claimType" className="text-yellow-600 dark:text-yellow-400">
                  Claim Type *
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select claim type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="property">Property Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Policy Number */}
              <div className="space-y-2">
                <Label htmlFor="policyNumber" className="text-yellow-600 dark:text-yellow-400">
                  Policy Number *
                </Label>
                <Input
                  id="policyNumber"
                  placeholder="Enter your policy number"
                  required
                />
              </div>

              {/* Incident Date */}
              <div className="space-y-2">
                <Label htmlFor="incidentDate" className="text-yellow-600 dark:text-yellow-400">
                  Date of Incident *
                </Label>
                <Input
                  id="incidentDate"
                  type="date"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-yellow-600 dark:text-yellow-400">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide details about what happened..."
                  rows={5}
                  required
                />
              </div>

              {/* Estimated Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-yellow-600 dark:text-yellow-400">
                  Estimated Claim Amount ($)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="documents" className="text-yellow-600 dark:text-yellow-400">
                  Upload Documents/Photos
                </Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-yellow-500 transition-colors">
                  <input
                    id="documents"
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                  <label htmlFor="documents" className="cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, PDF up to 10MB each
                    </p>
                  </label>
                </div>
                {files && files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {Array.from(files).map((file, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                        <FileText className="h-4 w-4 text-yellow-500" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:border-yellow-600 dark:hover:bg-gray-700"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white hover:opacity-90"
                >
                  Submit Claim
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
